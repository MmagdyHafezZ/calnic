'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell, Box, Paper, Stack, Title, Text, Radio, Group, Button, Progress, Badge, TextInput } from '@mantine/core';
import { diagnosticQuestions, diagnosticReasons } from '../../../../data/diagnostic-questions';
import { useAuthStore, useDoctorsStore, useUIStore } from '../../../../store';

const getAnswerValue = (answer) => {
    if (!answer) return '';
    return typeof answer === 'string' ? answer : answer.value || '';
};

const getOtherText = (answer) => {
    if (answer && typeof answer === 'object' && answer.value === 'other') {
        return answer.otherText || '';
    }
    return '';
};

const isAnswerComplete = (answer) => {
    if (!answer) return false;
    if (typeof answer === 'string') return !!answer;
    if (answer.value === 'other') {
        return !!(answer.otherText && answer.otherText.trim());
    }
    return !!answer.value;
};

export default function DiagnosticQuestionsPage() {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();
    const doctors = useDoctorsStore((s) => s.doctors);
    const setDiagnosticRecommendation = useUIStore((s) => s.setDiagnosticRecommendation);
    const setDiagnosticRanking = useUIStore((s) => s.setDiagnosticRanking);
    const clearDiagnosticRecommendation = useUIStore((s) => s.clearDiagnosticRecommendation);

    const flatQuestions = useMemo(() => {
        const list = diagnosticQuestions.flatMap((section) =>
            section.questions.map((q) => ({
                ...q,
                sectionId: section.id,
                sectionTitle: section.title
            }))
        );
        const map = new Map();
        list.forEach((q, idx) => {
            map.set(q.id, { ...q, order: idx });
        });
        return { list, map };
    }, []);

    const [answers, setAnswers] = useState({});
    const [currentId, setCurrentId] = useState(() => flatQuestions.list[0]?.id);
    const [history, setHistory] = useState([]);
    const [currentValue, setCurrentValue] = useState('');
    const [currentOtherText, setCurrentOtherText] = useState('');

    const current = currentId ? flatQuestions.map.get(currentId) : null;
    const total = flatQuestions.list.length;
    const answeredCount = useMemo(
        () => flatQuestions.list.reduce((count, q) => (isAnswerComplete(answers[q.id]) ? count + 1 : count), 0),
        [answers, flatQuestions.list]
    );
    const currentStep = Math.min(answeredCount + 1, total);
    const progress = Math.round((currentStep / total) * 100);

    useEffect(() => {
        clearDiagnosticRecommendation();
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [clearDiagnosticRecommendation, isAuthenticated, router]);

    useEffect(() => {
        if (current?.id) {
            const saved = answers[current.id];
            setCurrentValue(getAnswerValue(saved));
            setCurrentOtherText(getOtherText(saved));
        } else {
            setCurrentValue('');
            setCurrentOtherText('');
        }
    }, [current?.id, answers]);

    const selectAnswer = (questionId, value) => {
        const prevOtherText = getOtherText(answers[questionId]);
        setCurrentValue(value);
        setCurrentOtherText(value === 'other' ? prevOtherText : '');
        setAnswers((prev) => ({ ...prev, [questionId]: { value, otherText: prevOtherText } }));
    };

    const handleOtherTextChange = (text) => {
        if (!current?.id) return;
        setCurrentValue('other');
        setCurrentOtherText(text);
        setAnswers((prev) => ({ ...prev, [current.id]: { value: 'other', otherText: text } }));
    };

    const computeRecommendation = () => {
        const scores = {};

        flatQuestions.list.forEach((q) => {
            const chosen = getAnswerValue(answers[q.id]);
            const option = q.options.find((opt) => opt.value === chosen);
            if (option?.doctorWeights) {
                Object.entries(option.doctorWeights).forEach(([doctorName, weight]) => {
                    scores[doctorName] = (scores[doctorName] || 0) + weight;
                });
            }
        });

        // Default to first doctor if no scores
        const topDoctorName =
            Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || doctors[0]?.name || 'Dr. Ahmed';
        const topDoctor = doctors.find((d) => d.name === topDoctorName) || doctors[0];
        const ranking = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([name]) => name);

        return {
            doctorId: topDoctor?.id,
            doctorName: topDoctor?.name || topDoctorName,
            score: scores[topDoctorName] || 0,
            reason: diagnosticReasons[topDoctorName] || 'Best overall fit based on your answers.',
            ranking
        };
    };

    const getNextQuestionId = (questionId, answerValue) => {
        const q = flatQuestions.map.get(questionId);
        if (!q) return null;
        const selectedOption = q.options.find((opt) => opt.value === answerValue);
        if (selectedOption?.next && flatQuestions.map.has(selectedOption.next)) {
            return selectedOption.next;
        }
        // fallback to next in linear order
        const next = flatQuestions.list[q.order + 1];
        return next ? next.id : null;
    };

    const handleNext = () => {
        if (!current) return;
        const currentAnswer = answers[current.id];
        if (!isAnswerComplete(currentAnswer)) return;

        const nextId = getNextQuestionId(current.id, getAnswerValue(currentAnswer));
        if (nextId) {
            setHistory((h) => [...h, current.id]);
            setCurrentId(nextId);
            return;
        }

        const recommendation = computeRecommendation();
        setDiagnosticRecommendation({
            doctorId: recommendation.doctorId,
            doctorName: recommendation.doctorName,
            reason: recommendation.reason,
            score: recommendation.score
        });
        setDiagnosticRanking(recommendation.ranking);
        router.push('/diagnostic/results');
    };

    const handleBack = () => {
        if (history.length === 0) {
            router.push('/diagnostic');
            return;
        }
        setHistory((h) => {
            const copy = [...h];
            const prevId = copy.pop();
            setCurrentId(prevId);
            return copy;
        });
    };

    const currentAnswerComplete = currentValue === 'other' ? !!currentOtherText.trim() : !!currentValue;

    if (!current) {
        return (
            <AppShell.Main>
                <Box maw={900} mx="auto" py="xl" px="md">
                    <Paper withBorder shadow="sm" radius="xl" p="xl">
                        <Text c="dimmed">Loading questions...</Text>
                    </Paper>
                </Box>
            </AppShell.Main>
        );
    }

    return (
        <AppShell.Main>
            <Box maw={900} mx="auto" py="xl" px="md">
                <Paper withBorder shadow="sm" radius="xl" p="xl">
                    <Stack gap="md">
                        <Group justify="space-between" align="center">
                            <Title order={2} c="blue.6">
                                Diagnostic Questionnaire
                            </Title>
                            <Badge color="blue" variant="light">
                                Step {currentStep} of {total}
                            </Badge>
                        </Group>
                        <Progress value={progress} size="sm" radius="xl" />

                        <Box>
                            <Text c="dimmed" size="sm" mb={6}>
                                {current?.sectionTitle}
                            </Text>
                            <Title order={3} mb="sm">
                                {current?.prompt}
                            </Title>
                            <Radio.Group value={currentValue} onChange={(val) => selectAnswer(current.id, val)}>
                                <Stack gap="xs">
                                    {current?.options?.map((opt) => (
                                        <Radio key={opt.value} value={opt.value} label={opt.label} size="md" />
                                    ))}
                                    <Box>
                                        <Radio value="other" label="Other" size="md" />
                                        <TextInput
                                            mt="xs"
                                            placeholder="Add your own answer"
                                            value={currentOtherText}
                                            onChange={(e) => handleOtherTextChange(e.target.value)}
                                            disabled={currentValue !== 'other'}
                                        />
                                    </Box>
                                </Stack>
                            </Radio.Group>
                        </Box>

                        <Group justify="space-between" mt="md">
                            <Button variant="outline" onClick={handleBack}>
                                Back
                            </Button>
                            <Group gap="sm">
                                <Button variant="light" color="gray" onClick={() => router.push('/schedule-appointment')}>
                                    Skip to scheduling
                                </Button>
                                <Button onClick={handleNext} disabled={!currentAnswerComplete}>
                                    Next Question
                                </Button>
                            </Group>
                        </Group>
                    </Stack>
                </Paper>
            </Box>
        </AppShell.Main>
    );
}
