import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import useAuth from "../../hooks/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { updateUser } from "../../api/action";
import { toast } from "../ui/use-toast";

export default function EditProfile() {
  const { auth, setAuth } = useAuth();

  const [username, setUsername] = useState(auth?.username || "");
  const [fullName, setFullName] = useState(auth?.fullName || "");
  const [bio, setBio] = useState(auth?.bio || "");
  const [profilePicture, setProfilePicture] = useState(
    auth?.profilePicture || ""
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newUser = await updateUser(username, fullName, bio, profilePicture);
    setAuth(newUser);
    toast({
      title: "Profile updated",
    });
    setLoading(false);
    setOpen(false);
  };

  const handleProfilePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <Button className="w-full font-bold" variant={"outline"}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="absolute -top-1/3 left-1/2 -translate-x-1/2 text-2xl">
            Edit Profile
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex w-full">
                <div className="flex text-foreground/40 items-center w-full gap-5 text-lg">
                  <img
                    src={profilePicture}
                    alt="profile image"
                    className="w-14 rounded-full p-1 border"
                  />
                  <div className="flex justify-center flex-col w-full">
                    <span className="text-foreground font-bold">
                      {username}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="hidden"
                      id="profilePicture"
                    />
                    <label
                      htmlFor="profilePicture"
                      className="text-sm text-blue-500 cursor-pointer"
                    >
                      Change Profile Picture
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <div className="flex text-foreground/40 items-center w-full gap-5 text-lg">
                  <label htmlFor="username" className="w-24">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-card focus-visible:outline-none w-full box-border resize-none text-foreground"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="flex text-foreground/40 items-center w-full gap-5 text-lg">
                  <label htmlFor="fullName" className="w-24">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="bg-card focus-visible:outline-none w-full box-border resize-none text-foreground"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="flex text-foreground/40 items-center w-full gap-5 text-lg">
                  <label htmlFor="bio" className="w-24">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    className="bg-card focus-visible:outline-none w-full box-border resize-none text-foreground"
                    placeholder="Enter bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-foreground px-4 py-2 rounded"
                  disabled={loading}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
