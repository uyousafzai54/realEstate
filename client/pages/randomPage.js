import auth0 from './api/utils/auth0';
import { useRouter } from 'next/router';

export default function randomPage({ user }) {
  const router = useRouter();
  if (!user && typeof window !== 'undefined') {
    router.push('/api/login');
  } else {
    return null;
  }
  if (user) {
    return (
      <>
        <div>
          <h1>Hi There! Welcome to the Home Page</h1>
        </div>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  return {
    props: {
      user: session?.user || null,
    },
  };
}
