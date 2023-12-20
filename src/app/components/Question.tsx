import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

interface IQuestionData {
	title: string;
	answer: string;
	isEnabled?: boolean;
	handleClick: () => void;
}

const Question = ({ title, answer, isEnabled, handleClick }: IQuestionData) => {
	return (
		<div
			className='mt-4 hover:text-secondary-color'
			onClick={handleClick}
		>
			<div className='flex justify-between items-center hover:text-secondary-color text-primary-color cursor-pointer transition-all'>
				<h2 className='font-semibold text-lg mr-4'>{title}</h2>
				<div>
					{isEnabled ? (
						<MinusCircleIcon className='w-7 h-7' />
					) : (
						<PlusCircleIcon className='w-7 h-7 text-secondary-color' />
					)}
				</div>
			</div>
			{isEnabled && <p className='text-answer mt-4'>{answer}</p>}
			<hr className='mt-4' />
		</div>
	);
};

export default Question;
