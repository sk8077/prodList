const GroupComponent = ({ className = '' }) => {
  return (
    <div
      className={`w-[17.5rem] shrink-0 flex flex-col items-end justify-start pt-[1.068rem] pb-[1.493rem] pr-[1rem] pl-[0.625rem] box-border relative gap-[20.543rem] text-center text-[2.138rem] text-gray-200 font-roboto mq675:pt-[1.25rem] mq675:pb-[1.25rem] mq675:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[-0.006rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/mask-group-3@2x.png"
      />
      <div className="w-[1.625rem] relative font-light inline-block min-w-[1.625rem] z-[1] mq450:text-[1.313rem] mq750:text-[1.688rem]">
        Bookmark
      </div>
      <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.312rem] pl-[0.062rem] text-left text-[1.281rem] text-gainsboro font-encode-sans">
        <div className="flex flex-col items-start justify-start relative gap-[1.418rem]">
          <div className="relative tracking-[0.05em] font-medium z-[1] mq450:text-[1rem]">
            The Metro Movers Black
          </div>
          <div className="w-[9.306rem] flex flex-row items-end justify-start gap-[0.187rem] text-right text-[0.75rem]">
            <div className="w-[0.75rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border text-[1.194rem] font-roboto-serif">
              <div className="self-stretch h-[1.188rem] relative leading-[1.417rem] flex items-center z-[1]">
                rupee-sign
              </div>
            </div>
            <b className="flex-1 relative text-[1.175rem] font-bold inline-block min-w-[3.063rem] shrink-0 z-[1]">
              4899
            </b>
            <s className="relative [text-decoration:line-through] inline-block min-w-[1.813rem] shrink-0 z-[1]">
              8999
            </s>
            <div className="w-[3.125rem] relative leading-[0.958rem] font-medium text-limegreen text-left flex items-center min-w-[3.125rem] whitespace-nowrap shrink-0 z-[1]">
              (50% Off)
            </div>
          </div>
          <div className="w-[2.238rem] !m-[0] absolute right-[-0.937rem] bottom-[-0.794rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.181rem] box-border text-center text-[2.175rem] font-roboto">
            <div className="w-[1.631rem] relative leading-[2.625rem] font-light inline-block whitespace-nowrap z-[1] mq450:text-[1.313rem] mq750:text-[1.75rem]">
              shopping-bag
            </div>
            <div className="w-[1.244rem] !m-[0] absolute right-[0rem] bottom-[0rem] flex flex-row items-start justify-start pt-[0.181rem] px-[0.25rem] pb-[0.218rem] box-border text-[0.906rem]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-gray-100 z-[2]" />
              <div className="w-[0.688rem] relative leading-[0.875rem] font-light inline-block z-[3]">
                plus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
