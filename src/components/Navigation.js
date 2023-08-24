import Link from 'next/link';
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (


          <ul className="nav-steps">
                  <li className={router.pathname == "/profile" ? "active" : ""}><Link href='/profile'>Profil</Link></li>
   
                    <li className={router.pathname == "/profile/members" ? "active" : ""}><Link href='/profile/members'><a>Mitarbeiter</a></Link></li>

                    <li className={router.pathname == "/profile/notifications" ? "active" : ""}> <Link href='/profile/notifications'><a >Benachrichtigungen</a></Link></li>
                    <li className={router.pathname == "/profile/subscriptions" ? "active" : ""}><Link href='/profile/subscriptions'><a >Abo</a></Link></li>
                    <li className={router.pathname == "/profile/stripetransaction" ? "active" : ""}><Link href='/profile/stripetransaction'><a>Rechnungen</a></Link></li>
                    <li className={router.pathname == "/profile/payment-method" ? "active" : ""}><Link href='/profile/payment-method'><a >Zahlungsmethode</a></Link></li>
               
          </ul>
      
 

  );
};

export default Navigation;
