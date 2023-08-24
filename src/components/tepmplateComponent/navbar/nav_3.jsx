import Head from 'next/head';
// import ContentEditable from '../ContentEditable';

const Navbar3 = ({ backgroundColor, buttonColor, activeButtonColor, template_name }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} />
        <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/commontemp.css`} />
      </Head>
      <section>
        {/* <div id="nav_3">
            <div className="nav_icon">
                <svg className="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.142 89.142">
                    <g data-name="close icon" transform="translate(-1651.429 -281.429)"><line id="Line_13" data-name="Line 13" x2="75" y2="75" transform="translate(1658.5 288.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="10"/><line id="Line_14" data-name="Line 14" x1="75" y2="75" transform="translate(1659.5 288.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="10"/>
                    </g>
                </svg>
                <svg className="open_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 70">
                    <g  data-name="Humberger icon" transform="translate(-1458.5 -173.5)"><line id="Line_10" data-name="Line 10" x2="100" transform="translate(1463.5 178.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="10"/><line id="Line_11" data-name="Line 11" x2="100" transform="translate(1463.5 238.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="10"/><line id="Line_12" data-name="Line 12" x2="100" transform="translate(1463.5 208.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="10"/>
                    </g>
                </svg>
            </div>
            <div className="nav_wrapper_3">
                <li className="first_nav_item nav_item"><a href="#nav-1" className="active">Nav 1</a></li>
                <li className="nav_item"><a href="#nav-2">Nav 2</a></li>
                <li className="nav_item"><a href="#nav-3">Nav 3</a></li>
                <li className="nav_item"><a href="#nav-4">Nav 4</a></li>
                <li className="nav_item"><a href="#nav-5">Nav 5</a></li>
            </div>
        </div> */}
      </section>
      
    </>
  );
};

export default Navbar3;
