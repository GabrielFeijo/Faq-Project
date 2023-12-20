'use client';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import Question from '../components/Question';
import { questions } from '../questions';

const page = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [activatedCard, setActivatedCard] = useState<Number>();

	const changeState = (id: number) => {
		if (id === activatedCard) {
			return setActivatedCard(0);
		}
		setActivatedCard(id);
	};
	return (
		<div className='h-screen bg-primary-color flex justify-center'>
			<div className='bg-main-image bg-cover bg-no-repeat h-1/3 w-full absolute'></div>
			<main className='bg-white md:w-1/2 w-4/5 m-auto rounded-xl p-8 z-10 relative max-w-4xl'>
				<div className='flex items-center gap-2'>
					<QuestionMarkCircleIcon className='w-10 h-10 text-secondary-color' />
					<h1 className='text-primary-color font-bold text-4xl'>FAQs</h1>
				</div>

				<section>
					{questions.map((question) => (
						<Question
							key={question.id}
							title={question.title}
							answer={question.answer}
							handleClick={() => changeState(question.id)}
							isEnabled={activatedCard == question.id}
						/>
					))}
				</section>
			</main>
		</div>
	);
};

export default page;
