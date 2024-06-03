const FrameComponent = ({ className = '' }) => {
  return (
    <div
      className={`h-[30.213rem] w-[17.5rem] shrink-0 flex flex-col items-start justify-start text-center text-[2.138rem] text-gray-200 font-roboto ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-end pt-[1.068rem] px-[1rem] pb-[1.062rem] relative">
        <img
          className="h-full w-full absolute top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="w-[1.625rem] relative font-light inline-block z-[2] text-[2.138rem] text-gray-200 font-roboto mq450:text-[1.313rem] mq750:text-[1.688rem]">
          Bookmark
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-[17.08px] bg-gray-100 flex flex-col items-start justify-start pt-[1.656rem] pb-[0.7rem] pr-[0.375rem] pl-[0.625rem] gap-[0.993rem] mt-[-0.807rem] text-left text-[1.281rem] text-gainsboro font-encode-sans">
        <div className="w-[17.506rem] h-[7.688rem] relative rounded-t-none rounded-b-[17.08px] bg-gray-100 hidden" />
        <div className="relative tracking-[0.05em] font-medium z-[1] text-[1.281rem] text-gainsboro mq450:text-[1rem]">
          The Brown Metro Movers
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-right text-[0.75rem]">
          <div className="w-[9.306rem] flex flex-col items-start justify-start pt-[0.481rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[0.187rem]">
              <div className="w-[0.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border text-[1.194rem] font-roboto-serif">
                <div className="self-stretch h-[1.188rem] relative leading-[1.417rem] flex items-center z-[1]">
                  rupee-sign
                </div>
              </div>
              <b className="flex-1 relative text-[1.175rem] font-bold inline-block min-w-[3.063rem] z-[1]">
                4899
              </b>
              <s className="relative [text-decoration:line-through] inline-block min-w-[1.813rem] z-[1]">
                8999
              </s>
              <div className="w-[3.125rem] relative leading-[0.958rem] font-medium text-limegreen text-left flex items-center min-w-[3.125rem] whitespace-nowrap z-[1]">
                (50% Off)
              </div>
            </div>
          </div>
          <div className="h-[2.713rem] w-[2.244rem] relative text-center text-[2.175rem] font-roboto">
            <div className="absolute top-0 left-0 leading-[2.625rem] font-light inline-block w-[1.631rem] h-[2.531rem] whitespace-nowrap z-[1] mq450:text-[1.313rem] mq750:text-[1.75rem]">
              shopping-bag
            </div>
            <div className="absolute top-[1.438rem] left-[1rem] w-[1.244rem] h-[1.275rem] text-[0.906rem]">
              <div className="absolute top-0 left-0 rounded-[50%] bg-gray-100 w-full h-full z-[2]" />
              <div className="absolute top-[0.181rem] left-[0.269rem] leading-[0.875rem] font-light z-[3]">
                plus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
