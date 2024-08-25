

const YoutubeVid = () => {
  return (
    <>
      <div className='2xl:container'>
        <div className='w-[90%]  lg:w-[100%] grid grid-cols-1 mx-auto  lg:ml-[6%] my-11'>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FrgH2VMIOf8?si=MCGpHFL6vzULgW5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%]"></iframe>
            </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeVid
