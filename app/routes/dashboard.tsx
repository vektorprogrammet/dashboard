import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Separator } from "@radix-ui/react-separator";
import {
  BookUser,
  ChevronRight,
  ChevronsUpDown,
  CircleEllipsis,
  Info,
  LayoutDashboard,
  LogOut,
  MapPinned,
  NotebookPen,
  PiggyBank,
  Receipt,
  Send,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { Fragment, type ReactNode, useState } from "react";
import { Link, NavLink, Outlet, href, useLocation } from "react-router";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/ui/sidebar";

const user = {
  name: "Julia Dai",
  email: "julia@vektorprogrammet.no",
  avatar:
    "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6407131bab385.jpeg",
};

function UserMenu({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const isMobile = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip="User menu"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">Profil</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <Link to={href("/dashboard/profile")} prefetch="intent">
                <DropdownMenuItem>
                  <User />
                  Profil
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <Receipt />
                Mine Utlegg
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Logg ut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
const mainLinks = [
  {
    title: "Opptak",
    url: href("/dashboard/sokere"),
    icon: <TrendingUp size={16} />,
    isActive: false,
    links: [
      {
        title: "Nye Søkere",
        url: href("/dashboard/sokere"),
      },
      {
        title: "Tidligere Assistenter",
        url: href("/dashboard/tidligereassistenter"),
      },
      {
        title: "Intervjufordeling",
        url: href("/dashboard/intervjufordeling"),
      },
      {
        title: "Intervjuer",
        url: href("/dashboard/intervjuer"),
      },
      {
        title: "Statistikk",
        url: href("/dashboard/statistikk"),
      },
    ],
  },
  {
    title: "Assistenter",
    url: href("/dashboard/assistenter"),
    icon: <BookUser size={16} />,
    isActive: false,
    links: [
      {
        title: "Assistenter",
        url: href("/dashboard/assistenter"),
      },
      {
        title: "Vikarer",
        url: href("/dashboard/vikarer"),
      },
      {
        title: "Skoler",
        url: href("/dashboard/skoler"),
      },
    ],
  },
  {
    title: "Brukere",
    url: href("/dashboard/brukere"),
    icon: <Users size={16} />,
    isActive: false,
    links: [
      {
        title: "Alle Brukere",
        url: href("/dashboard/brukere"),
      },
      {
        title: "Epostliste",
        url: href("/dashboard/epostliste"),
      },
    ],
  },
];
const adminLinks = [
  {
    title: "Team",
    url: "#",
    icon: <NotebookPen size={16} />,
    isActive: false,
    links: [
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Teaminteresse",
        url: "#",
      },
    ],
  },
  {
    title: "Økonomi",
    url: "#",
    icon: <PiggyBank size={16} />,
    isActive: false,
    links: [
      {
        title: "Utlegg",
        url: "#",
      },
      {
        title: "Sponsorer",
        url: "#",
      },
    ],
  },
  {
    title: "Annet",
    url: "#",
    icon: <CircleEllipsis size={16} />,
    isActive: false,
    links: [
      {
        title: "Attester",
        url: "#",
      },
      {
        title: "Intervjusjema",
        url: "#",
      },
      {
        title: "Avdelinger",
        url: "#",
      },
      {
        title: "Linjer",
        url: "#",
      },
      {
        title: "Opptaksperioder",
        url: "#",
      },
    ],
  },
];

function NavLinks({
  links,
}: {
  links: Array<{
    title: string;
    url: string;
    icon: ReactNode;
    isActive?: boolean;
    links?: Array<{
      title: string;
      url: string;
    }>;
  }>;
}) {
  const { open } = useSidebar();

  return (
    <SidebarMenu>
      {links.map((link) => {
        return (
          <Collapsible
            key={link.title}
            asChild
            defaultOpen={link.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={link.title}>
                  {open ? (
                    <>
                      {link.icon}
                      <span>{link.title}</span>
                    </>
                  ) : (
                    <Link to={link.url} prefetch="intent">
                      {link.icon}
                    </Link>
                  )}
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {link.links?.map((subLink) => (
                    <SidebarMenuSubItem key={subLink.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subLink.url} prefetch="intent">
                          <span>{subLink.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      })}
    </SidebarMenu>
  );
}

const departments = ["Trondheim", "Bergen", "Ås"];

function StatusMenu({
  subTitle,
  label,
  status,
  icon,
}: {
  subTitle: string;
  label: string;
  status: Array<string>;
  icon: ReactNode;
}) {
  const [activeStatus, setActiveStatus] = useState(status[0]);
  const isMobile = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip={label}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                {icon}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeStatus}</span>
                <span className="truncate text-xs">{subTitle}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              {label}
            </DropdownMenuLabel>
            {status.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => setActiveStatus(status)}
                className="gap-2 p-2"
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function Breadcrumbs() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((path) => path);
  const Paths = paths.map((path, index, arr) => {
    const fullPath = arr.slice(0, index + 1).join("/");

    const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);

    const isEnd = index === paths.length - 1;

    return (
      <Fragment key={fullPath}>
        <BreadcrumbItem>
          <NavLink
            to={`/${fullPath}`}
            className={cn(
              isEnd ? "text-black" : "text-gray-500",
              "hover:text-black",
            )}
            prefetch="intent"
          >
            {capitalizedPath}
          </NavLink>
        </BreadcrumbItem>
        {!isEnd && <BreadcrumbSeparator />}
      </Fragment>
    );
  });

  return (
    <div className="flex items-center gap-2 px-4">
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>{Paths}</BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Layout() {
  /* const [opened, { toggle }] = useDisclosure();
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!userId) {
    return redirect("/sign-in");
  } */
  return (
    <SidebarProvider>
      <aside>
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader>
            {/* User menu */}
            <UserMenu user={user} />
          </SidebarHeader>
          <SidebarContent>
            <nav aria-label="primary">
              {/* Primary navigation */}
              <SidebarGroup>
                <SidebarMenuItem key={"Kontrollpanel"}>
                  <SidebarMenuButton asChild tooltip={"Kontrollpanel"}>
                    <Link to={href("/dashboard")} prefetch="intent">
                      {<LayoutDashboard />}
                      <span>{"Kontrollpanel"}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <NavLinks links={mainLinks} />
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Admin</SidebarGroupLabel>
                <NavLinks links={adminLinks} />
              </SidebarGroup>
            </nav>
          </SidebarContent>
          <SidebarFooter className="m-0 p-2">
            <nav aria-label="secondary">
              {/* Secondary navigation */}
              <SidebarGroup className="mt-auto transition-[padding] group-data-[collapsible=icon]:p-0">
                <SidebarGroupContent>
                  <SidebarMenu>
                    {[
                      { title: "Slab", url: "#", icon: <Info /> },
                      { title: "Feedback", url: "#", icon: <Send /> },
                    ].map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton
                          asChild
                          size="sm"
                          tooltip={link.title}
                        >
                          <Link to={link.url} prefetch="intent">
                            {link.icon}
                            <span>{link.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </nav>
            <StatusMenu
              subTitle="Avdeling"
              label="Avdelinger"
              icon={<MapPinned />}
              status={departments}
            />
          </SidebarFooter>
        </Sidebar>
      </aside>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
