import Head from 'next/head';
import auth0 from './api/utils/auth0'; 
export default function Home({user}) {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
                <nav>
                    <div className="flex items-center justify-between py-4  ">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                                <a href="/randomPage">Random Page</a>
                            </div>
                        </div>
                        <div className="flex">
                            {user ? (
                                <a
                                    href="/api/logout"
                                    className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                                >
                                    Logout
                                </a>
                            ) : (
                                <a
                                    href="/api/login"
                                    className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
                                >
                                    Login
                                </a>
                            )}
                        </div>
                    </div>
                </nav>
            </main>
      <div>
        <h1>Hi There! Welcome to the Home Page</h1>
      </div>
    </>
  );
}

export async function getServerSideProps(context)
{
  const session = await auth0.getSession(context.req); 
  return {
    props: {
      user: session?.user || null, 
    }
  }
}