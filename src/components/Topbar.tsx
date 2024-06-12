import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function Topbar() {
  return (
    <Tabs
      defaultValue="account"
      className="flex items-center flex-col justify-center my-5"
    >
      <TabsList>
        <TabsTrigger value="account">For You</TabsTrigger>
        <TabsTrigger value="password">Following</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
}
