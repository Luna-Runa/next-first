import Head from "next/head";

export default function Title({ title }: any) {
  return (
    <Head>
      <title>{title} | Movies</title>
    </Head>
  );
}
