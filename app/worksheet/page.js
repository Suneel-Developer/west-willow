"use client"


import React, { useState } from 'react';

const AdditionWorksheet = () => {
    const [level, setLevel] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [problems, setProblems] = useState([]);
    const [answers, setAnswers] = useState([]);

    const generateProblems = (level) => {
        const newProblems = [];
        const newAnswers = [];
        for (let i = 0; i < 15; i++) {
            const num1 = level === 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 50);
            const num2 = level === 1 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 50);
            newProblems.push(`${num1} + ${num2} =`);
            newAnswers.push(num1 + num2);
        }
        setProblems(newProblems);
        setAnswers(newAnswers);
        setLevel(level);
        setShowAnswer(false);
        setShowInput(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-3xl bg-white p-4 rounded shadow">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Addition Worksheet</h1>
                </header>
                <div className="grid grid-cols-3 gap-4">
                    {problems.length === 0 ? (
                        <div className="col-span-3 flex flex-col items-center">
                            {Array(15).fill().map((_, i) => (
                                <div key={i} className="mb-2 w-full h-4 bg-gray-300"></div>
                            ))}
                        </div>
                    ) : (
                        problems.map((problem, index) => (
                            <div key={index} className="mb-2 flex items-center justify-between">
                                <span>{index + 1}) {problem}</span>
                                {showInput ? (
                                    <input type="text" className="border rounded w-16 text-center" />
                                ) : (
                                    <span className="border rounded w-16 text-center">{showAnswer ? answers[index] : ''}</span>
                                )}
                            </div>
                        ))
                    )}
                </div>
                <footer className="mt-4 flex justify-around">
                    <button
                        onClick={() => generateProblems(1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Generate Level 1
                    </button>
                    <button
                        onClick={() => generateProblems(2)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Generate Level 2
                    </button>
                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    <button
                        onClick={() => setShowInput(!showInput)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {showInput ? 'Clear Input' : 'Show Input'}
                    </button>
                </footer>
                {showAnswer && (
                    <div className="mt-4 text-center">
                        <p>Answers: {answers.join(', ')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdditionWorksheet;
