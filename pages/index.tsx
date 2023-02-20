import { LinkedList } from '../practice/data-structures/utils/LinkedList/LinkedList';

export default function Home() {
  const linkedList = new LinkedList<string>();
  console.log(linkedList.prepend('test1'));
  console.log(linkedList.prepend('test2'));
  console.log(linkedList.prepend('test3'));
  return <div>HOME</div>;
}
