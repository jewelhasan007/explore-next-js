
import AboutContents from '@/components/AboutContents';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This is About Page</h1>
            <Link href='/about/history' >History</Link>
            <Link href='/about/mission' >Mission</Link>
            <AboutContents></AboutContents>
        </div>
    );
};

export default page;