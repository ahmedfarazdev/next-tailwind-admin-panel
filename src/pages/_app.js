import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import DashboardProvider from '../dashboard/provider/context';
import LoginForm from '../components/login';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>

      <DashboardProvider>
        {/* <LoginForm /> */}
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default MyApp;
