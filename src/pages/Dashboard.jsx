export function Dashboard() {
  return (
    <div
      className="
        max-w-[1400px]
        mx-auto
        self-stretch
        w-full  
    "
    >
      <div className="flex w-full h-full md:px-5 py-5">
        <div className="w-1/5 bg-slate-600">he</div>
        <div className="w-4/5">
          <div className="p-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[380px]">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">
                  Notifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  You have 3 unread messages.
                </p>
              </div>
              <div className="p-6 pt-0 grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell-ring"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    <path d="M2 8c0-2.2.7-4.3 2-6" />
                    <path d="M22 8a10 10 0 0 0-2-6" />
                  </svg>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  >
                    <span
                      data-state="unchecked"
                      className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>{" "}
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="mt-5 rounded-lg border bg-card text-card-foreground shadow-sm w-[380px]">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">
                  Notifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  You have 3 unread messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
