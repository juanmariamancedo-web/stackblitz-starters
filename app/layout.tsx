import getUsers from '@/src/actions/getUsers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideNav from '@/src/components/SideNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legitimuz',
  description: 'Legitimuz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = getUsers()

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className='flex justify-center min-h-screen py-24'>
            <div className='p-4 grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center container overflow-hidden'>
                <div className='col-span-1 md:col-span-2'>
                  <SideNav users={users} />
                </div>
                <div className='col-span-1 md:col-span-2'>
                  {children}
                </div>
            </div>
          </div>
      </body>
    </html>
  );
}
