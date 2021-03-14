import { server } from '../config';
import ArticleList from '../components/ArticleList';

export default function Home() {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
