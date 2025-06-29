import './App.css';
import Collge from './Collge';

function App() {
  const collge = [
    {
      Name : 'Lookmanya',
      Website : 'www.Lookmanya.com',
      student : [
        {
           Name : 'Manav',
           Age : '20',
        },
        {
           Name : 'jaydeep',
           Age : '20',
        },
        {
           Name : 'Jay',
           Age : '20',
        },
      ]
    },
    {
      Name : 'JG Collge',
      Website : 'www.JGCollge.com',
      student : [
        {
           Name : 'Manav',
           Age : '20',
        },
        {
           Name : 'jaydeep',
           Age : '20',
        },
        {
           Name : 'Jay',
           Age : '20',
        }
      ]
    },
    {
      Name : 'NavGujrat',
      Website : 'www.navGujrat.com',
      student : [
        {
           Name : 'Manav',
           Age : '20',
        },
        {
           Name : 'jaydeep',
           Age : '20',
        },
        {
           Name : 'Jay',
           Age : '20',
        },
      ]
    }
  ]
  return(
    <>
      {
        collge.map((collge)=>(
          <Collge collge={collge}/>
        ))
      }
   </>
  ); 
}

export default App;
