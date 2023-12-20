import {
	ArrowRightIcon,
	FaceSmileIcon,
	Square3Stack3DIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

const Home = () => {
	return (
		<div className='h-screen bg-primary-color flex justify-center'>
			<div className='bg-main-image bg-cover bg-no-repeat h-1/3 w-full absolute'></div>
			<main className='bg-white md:w-1/2 w-4/5 m-auto rounded-xl p-8 z-10 relative max-w-4xl text-primary-color'>
				<div className='flex items-center gap-2'>
					<span>
						<Square3Stack3DIcon className='w-10 h-10 text-secondary-color' />
					</span>
					<h1 className=' font-bold text-4xl'>Bem-vindo(a) ao Faq Project</h1>
				</div>
				<p className='my-4 px-1 text-justify'>
					O projeto de FAQ Interativo representa uma oportunidade prática no
					desenvolvimento front-end, centrando-se na implementação de um padrão
					de interface de usuário comum: a exibição de perguntas frequentes
					(FAQ). Este componente desempenha um papel crucial em websites,
					oferecendo uma abordagem organizada e interativa para apresentar
					informações, permitindo que os usuários revelem e ocultem conteúdos
					conforme necessário.
				</p>
				<Link
					href={'/faq'}
					className=' block w-28 p-2 rounded-lg  bg-btn-color text-white'
				>
					<span className='flex items-center justify-between font-medium text-xl '>
						Iniciar
						<ArrowRightIcon className='w-6 h-6' />
					</span>
				</Link>
			</main>
		</div>
	);
};

export default Home;
