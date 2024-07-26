import {trpc} from "../trpc";

export default async function Home() {
  // do some fetching, type infer works fine in TypeScript 5.5.0-beta but not in 5.5.4
  const list = await trpc.list.query({type: 'all'})
  return (
      <div>
        {list.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
        ))}
      </div>
  );
}
