"use client"
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['The Beauty Guru', 'anyone', 'The Music Lover', 'The Mixologist'];

const TEXT_COLORS = {
    'The Beauty Guru': 'green',
    'anyone': 'red',
    'The Music Lover': 'blue',
    'The Mixologist': 'orange'
};

const AutoText = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => (index + 1) % TEXTS.length),
            3000,
        );
        return () => clearInterval(intervalId);
    }, []);

    const currentText = TEXTS[index % TEXTS.length];
    const currentColor = TEXT_COLORS[currentText];

    return (
        <div className='max-w-[1296px] mx-auto w-full py-5 px-3'>
            <div className='text-xl md:text-3xl text-karla-m flex items-center gap-2'>
                <p>Extra-special gifts for</p>
                <TextTransition springConfig={presets.wobbly}>
                    <span style={{ color: currentColor }}>{currentText}</span>
                </TextTransition>
            </div>
        </div>
    );
};

export default AutoText;
