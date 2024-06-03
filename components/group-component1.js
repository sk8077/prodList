import { useMemo } from 'react';

const GroupComponent1 = ({
  className = '',
  maskGroup,
  propWidth,
  propFlex,
  propWidth1,
  propDisplay,
  propWidth2,
  propLeft,
  propLeft1,
}: any) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bookmarkStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
      display: propDisplay,
    };
  }, [propFlex, propWidth1, propDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const plusStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={`w-[17.5rem] shrink-0 flex flex-col items-end justify-start pt-[1.068rem] px-[0.375rem] pb-[0.7rem] box-border relative gap-[20.543rem] text-center text-[2.138rem] text-gray-200 font-roboto ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[-0.006rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={maskGroup}
      />
      <div
        className="w-[2.8rem] flex flex-row items-start justify-end py-[0rem] px-[0.562rem] box-border"
        style={frameDivStyle}
      >
        <div
          className="flex-1 relative font-light z-[1] mq450:text-[1.313rem] mq750:text-[1.688rem]"
          style={bookmarkStyle}
        >
          Bookmark
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] text-left text-[1.281rem] text-gainsboro font-encode-sans">
        <div className="relative tracking-[0.05em] font-medium z-[1] mq450:text-[1rem]">
          The Metro Movers Black
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
          <div
            className="h-[2.713rem] w-[2.238rem] relative text-center text-[2.175rem] font-roboto"
            style={frameDiv1Style}
          >
            <div className="absolute top-[0rem] left-[0rem] leading-[2.625rem] font-light inline-block w-[1.631rem] h-[2.531rem] whitespace-nowrap z-[1] mq450:text-[1.313rem] mq750:text-[1.75rem]">
              shopping-bag
            </div>
            <div
              className="absolute top-[1.438rem] left-[0.994rem] w-[1.244rem] h-[1.275rem] text-[0.906rem]"
              style={frameDiv2Style}
            >
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-100 w-full h-full z-[2]" />
              <div
                className="absolute top-[0.181rem] left-[0.275rem] leading-[0.875rem] font-light z-[3]"
                style={plusStyle}
              >
                plus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
