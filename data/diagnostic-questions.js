export const diagnosticQuestions = [
    {
        id: 'symptoms',
        title: 'Symptoms',
        questions: [
            {
                id: 'primary-symptom',
                prompt: 'Which description best matches the main concern?',
                options: [
                    {
                        value: 'respiratory',
                        label: 'Chest tightness, cough, shortness of breath',
                        doctorWeights: { 'Dr. Turner': 3, 'Dr. Ahmed': 1 },
                        next: 'resp-details'
                    },
                    {
                        value: 'musculoskeletal',
                        label: 'Joint or muscle pain, sports injury',
                        doctorWeights: { 'Dr. Mike': 3, 'Dr. Ahmed': 1 },
                        next: 'injury-type'
                    },
                    {
                        value: 'neurological',
                        label: 'Headache, dizziness, migraines',
                        doctorWeights: { 'Dr. Joel': 2, 'Dr. Ahmed': 1 },
                        next: 'neuro-pattern'
                    },
                    { value: 'general', label: 'Fever, fatigue, general check-up', doctorWeights: { 'Dr. Ahmed': 3 } }
                ]
            },
            {
                id: 'resp-details',
                prompt: 'Respiratory concern details',
                options: [
                    { value: 'wheezing', label: 'Wheezing or tightness', doctorWeights: { 'Dr. Turner': 2 } },
                    { value: 'infection', label: 'Fever with cough / infection signs', doctorWeights: { 'Dr. Ahmed': 1, 'Dr. Turner': 1 } },
                    { value: 'asthma', label: 'Known asthma flare', doctorWeights: { 'Dr. Turner': 3 } }
                ]
            },
            {
                id: 'injury-type',
                prompt: 'Muscle/joint issue type',
                options: [
                    { value: 'acute', label: 'Recent injury or sprain', doctorWeights: { 'Dr. Mike': 3 } },
                    { value: 'chronic', label: 'Chronic pain or mobility issues', doctorWeights: { 'Dr. Mike': 2, 'Dr. Ahmed': 1 } },
                    { value: 'post-surgery', label: 'Post-surgery follow-up', doctorWeights: { 'Dr. Mike': 2 } }
                ]
            },
            {
                id: 'neuro-pattern',
                prompt: 'Neurological pattern',
                options: [
                    { value: 'migraine', label: 'Recurring migraines', doctorWeights: { 'Dr. Joel': 2 } },
                    { value: 'sudden', label: 'Sudden or severe onset', doctorWeights: { 'Dr. Joel': 2, 'Dr. Ahmed': 1 } },
                    { value: 'dizzy', label: 'Dizziness/vertigo', doctorWeights: { 'Dr. Joel': 2 } }
                ]
            },
            {
                id: 'pain-level',
                prompt: 'How severe is the discomfort?',
                options: [
                    { value: 'mild', label: 'Mild (1-3)', doctorWeights: { 'Dr. Ahmed': 1 } },
                    { value: 'moderate', label: 'Moderate (4-6)', doctorWeights: { 'Dr. Ahmed': 1, 'Dr. Mike': 1 } },
                    { value: 'severe', label: 'Severe (7-10)', doctorWeights: { 'Dr. Turner': 1, 'Dr. Joel': 1 } }
                ]
            }
        ]
    },
    {
        id: 'history',
        title: 'History',
        questions: [
            {
                id: 'chronic',
                prompt: 'Do they have a chronic condition related to this visit?',
                options: [
                    { value: 'cardiac', label: 'Cardiac / blood pressure', doctorWeights: { 'Dr. Turner': 2, 'Dr. Ahmed': 1 } },
                    { value: 'resp', label: 'Asthma / respiratory', doctorWeights: { 'Dr. Turner': 2 } },
                    { value: 'ortho', label: 'Orthopedic / mobility', doctorWeights: { 'Dr. Mike': 2 } },
                    { value: 'none', label: 'None / not sure', doctorWeights: { 'Dr. Ahmed': 1 } }
                ]
            },
            {
                id: 'followup',
                prompt: 'Is this a follow-up with a doctor?',
                options: [
                    { value: 'turner', label: 'Follow-up with Dr. Turner', doctorWeights: { 'Dr. Turner': 3 } },
                    { value: 'mike', label: 'Follow-up with Dr. Mike', doctorWeights: { 'Dr. Mike': 3 } },
                    { value: 'joel', label: 'Follow-up with Dr. Joel', doctorWeights: { 'Dr. Joel': 3 } },
                    { value: 'any', label: 'Any family doctor', doctorWeights: { 'Dr. Ahmed': 2 } }
                ]
            }
        ]
    },
    {
        id: 'preferences',
        title: 'Preferences',
        questions: [
            {
                id: 'availability',
                prompt: 'Which is more important?',
                options: [
                    { value: 'earliest', label: 'Earliest available appointment', doctorWeights: { 'Dr. Turner': 1, 'Dr. Ahmed': 1, 'Dr. Mike': 1, 'Dr. Joel': 1 } },
                    { value: 'specialty', label: 'Doctor with closest specialty match', doctorWeights: {} },
                    { value: 'continuity', label: 'Same doctor as last visit', doctorWeights: { 'Dr. Ahmed': 1 } }
                ]
            },
            {
                id: 'time-preference',
                prompt: 'Preferred time of day',
                options: [
                    { value: 'morning', label: 'Morning', doctorWeights: { 'Dr. Ahmed': 1, 'Dr. Mike': 1 } },
                    { value: 'afternoon', label: 'Afternoon', doctorWeights: { 'Dr. Turner': 1 } },
                    { value: 'evening', label: 'Evening', doctorWeights: { 'Dr. Joel': 1 } }
                ]
            }
        ]
    }
];

export const diagnosticReasons = {
    'Dr. Ahmed': 'Family medicine/generalist fit for broad concerns and continuity.',
    'Dr. Turner': 'Respiratory and cardiac focused, often best for breathing or cardiovascular symptoms.',
    'Dr. Mike': 'Musculoskeletal and mobility focused, strong for injury or orthopedic follow-ups.',
    'Dr. Joel': 'Neurology and remote consult focus, ideal for headaches, dizziness or after-hours.'
};
