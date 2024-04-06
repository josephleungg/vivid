'use client';
import { useDarkMode } from '@/hooks/useDarkModeContext';

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="h-[80vh] dark:bg-gray-900 bg-center bg-cover bg-[url('/images/home_page_background.jpg')]">
        <div className='bg-white/60 ml-10 w-7/12 p-5'>
          <h1 className="text-3xl">Welcome to FunFusion!</h1>
          <div className='mt-5'>
            <p>
              Get ready to ignite your fitness journey with us. Whether you're a seasoned gym-goer or 
              new to the fitness scene, we're thrilled to have you join our vibrant community.            
            </p>
            <p className='mt-5'> 
              Ready to dive in? Click "Login" or "Register" in the navigation bar above to access exclusive 
              member benefits and start exploring everything FunFusion Fitness has to offer. Let's make every 
              workout an adventure!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
