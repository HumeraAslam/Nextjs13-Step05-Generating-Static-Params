import Link from 'next/link';

export default function Home() {
  return (
     <div> 
        <h1 >Hello Everyone !<br /></h1>
        <h4>from <br /></h4>
        <h2> <b> Humera Aslam</b></h2>
        <br/>
        <Link href="/Zia">Go to Zia page</Link>
        <br/>
        <Link href="/Zeeshan">Go to Zeeshan page</Link>
        <br/>
        <Link href="/Hira">Go to Hira page</Link>
        <br/>
        <Link href="/Daniyal">Go to Daniyal page</Link>
      </div>
  )
}
