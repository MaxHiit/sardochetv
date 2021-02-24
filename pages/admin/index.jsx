import Layout from '../../components/Layout/Layout.jsx';
import Button from '../../components/Button/Button.jsx';

import { signIn, signOut, useSession } from 'next-auth/client';

const adminPage = ({ adminList }) => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <Layout className="items-center justify-center">
        <Button
          reversed
          icon="twitch"
          onClick={() => signIn('twitch')}
          text="Login !"
        />
      </Layout>
    );
  }

  return (
    <Layout menu user={session.user}>
      You are logged-in.
      <Button
        reversed
        icon="twitch"
        onClick={() => signOut('twitch')}
        text="Logout !"
      />
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: { adminList: ['sardoche'] } };
}

export default adminPage;
