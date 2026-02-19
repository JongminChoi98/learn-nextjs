export default async function MovieDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { id } = await params;
  const query = await searchParams;

  console.log("searchParams:", query);

  return <h1>Movie Detail: {id}</h1>;
}
