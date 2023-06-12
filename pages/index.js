import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I currently am a Full-stack Developer from Microverse, an online coding school where I code every day with other developers worldwide. One of my projects is a Booking app developed with React & Redux and Ruby on Rails that allows the user to book Tesla cars, it is also tested with Jest. After finishing the Microverse program, I have created many other projects solo or collaborative. Besides, I have learned about communication and teamwork skills, giving and receiving good feedback from teammates, and managing conflicts.

          Front-End: JavaScript, React, Redux.
          Back-End: Ruby, Rails, PostgreSQL.
          Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile Development, TDD, Chrome DevTools. Professional: Remote Pair-Programming, Teamwork, Mentoring, Code review.
          Portfolio: https://borja-francisco-potfolio.netlify.app

          Before joining Microverse, I have already finished my major in Business Engineer at National Politechnical School, and in a couple of months, I will be able to develop web pages that help businesses be competitive I like to become an active member of your company developing web pages and growing my experience in web page development.

          I am currently in the academic capacity to design strategies aimed at:

          📑 Planning,
          📠 Organization,
          👉 Address,
          📡 Innovation,
          📊 Control of business systems.


          The Business Engineer curricular scenario combines modern concepts on:

          📈 Administration,
          🏸Marketing,
          🤝 Human Resources,
          📃 Management Information,
          🔬 Production control,
          💰 Accounting,
          💸 Economy,
          📜 Legislation,
          ✔️Mathematics Applied to Business Management.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
