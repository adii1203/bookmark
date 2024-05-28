import { Input } from "@/components/ui/input";
import { auth, signOut } from "@/auth";
import UserProfile from "../_component/user-profile";
import AddBookmarModal from "@/modals/add-bookmark-modal";
import CardWrapper from "../_component/card-wrapper";

export default async function Component() {
  const session = await auth();

  return (
    <div className="w-full">
      <div className="">
        <header className="flex sticky top-0 w-full h-14 lg:h-[60px] items-center justify-center gap-4 border-b bg-gray-50 px-6 dark:bg-gray-800/40">
          <div className="w-full">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search bookmarks..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <UserProfile
            profileImage={session?.user?.image || ""}
            signOut={async () => {
              "use server";
              await signOut({
                redirectTo: "/",
              });
            }}
          />
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="hidden sm:block font-semibold text-lg md:text-2xl">
              {`Wellcome, ${session?.user?.name}`}
            </h1>
            <AddBookmarModal userId={session?.user?.id!} />
          </div>
          <div>
            <CardWrapper />
          </div>
        </main>
      </div>
    </div>
  );
}

function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
