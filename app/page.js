

export default function Home() {
  return (
    <>
      <main className="text-white flex justify-center flex-col items-center h-[44vh] gap-4 ">
        <div className="gap-4 font-bold flex justify-center items-center text-3xl py-2">buy me a chai <span><img src="/mug.svg" width={45} alt="" /></span></div>
        <p>A crowd funding plateform for creators. Get your funds from your fans and followers.</p>
        <p>A palce where your fans buy you a chai. unleash power of your fans and get your project funded.</p>
        <div>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </main>
      <div className="bg-blue-200 opacity-20 h-1"></div>
      <div className="mx-auto text-white container pb-32 pt-14">
        <h1 className=" font-bold my-4 text-3xl text-center">Your fans can get you a chai</h1>
        <div className="flex justify-around gap-5">
        <div className="space-y-3 item flex flex-col items-center justify-center">
            <img width={88} src="/men.png" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="space-y-3 item flex flex-col items-center justify-center">
            <img width={88} src="/group.png" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="space-y-3 item flex flex-col items-center justify-center">
            <img width={88} src="/coin.png" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-200 opacity-20 h-1"></div>
      <div className="mx-auto text-white container pb-32 pt-14 flex justify-center items-center flex-col">
        <h2 className=" font-bold my-4 text-3xl text-center">learn more about us</h2>
        <iframe width="500" height="280" src="https://www.youtube.com/embed/L_RdRkOJie8?si=IUVuHn22z2aEQr2n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
