import Head from "next/head"


export default function  CONNECTWITHME ()
 {

return(
<>

<Head>
        {/* Add Tailwind CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        {/* Add any other head elements you need */}
      </Head>
    <h1 className="text-center my-3 font-semibold text-3xl">Connect with me </h1>  
    <div className="flex flex-col items-center sm:flex-row gap-2 justify-center">
    <a href="https://github.com/Shibbu264" target="_blank">
    <img src='https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white' alt='github' className="my-3 w-32" />
    </a>
    <a href="https://twitter.com/shivuuuuu264" target="_blank">
    <img src='https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white' alt='twitter' className="my-3 w-32" />
    </a>
    <a href="https://linkedin.com/in/https://www.linkedin.com/in/shivanshu-ranjan-0671a3245/" target="_blank">
    <img src='https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white' alt='linkedin'className="my-3 w-32" />
    </a>
    <a href="https://instagram.com/shivuuuuu__264" target="_blank">
    <img src='https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white' alt='instagram' className="my-3 w-32" />
    </a>  
    </div>  

    </>





















)

}