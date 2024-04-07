import { Call, useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call: Call | undefined = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  if (!isMeetingOwner) return null;
  return (
    <Button
      onClick={async () => {
        if (call) {
          await call.endCall();
          router.push("/");
        }
      }}
      className="bg-red-500"
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
