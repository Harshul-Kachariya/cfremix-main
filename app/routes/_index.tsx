import type { MetaFunction } from "@remix-run/node";
import { ConfigProvider, Input } from "antd";
import type { GetProp } from "antd";
import type { OTPProps } from "antd/es/input/OTP";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const onChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    console.log("onChange:", text);
  };
  const customStyles = {
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "500px",
    backgroundColor: "#f9f9f9",
  };

  const sharedProps: OTPProps = {
    onChange,
  };
  return (
    <div className="font-sans flex-col gap-5 flex p-4 text-2xl ">
      Welcome to Web Click on above link to show an components
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 40,
            lineWidth: 2,
          },
          components: {
            Input: {
              colorPrimary: "#eb2f96",
              paddingBlock: 11,
            },
          },
        }}
      >
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      </ConfigProvider>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    </div>
  );
}
