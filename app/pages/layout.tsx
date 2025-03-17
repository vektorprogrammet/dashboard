import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Separator } from "@radix-ui/react-separator";
import {
  BadgeCheck,
  Bell,
  ChartLine,
  ChevronRight,
  ChevronsUpDown,
  Info,
  LifeBuoy,
  LogOut,
  MapPinned,
  NotebookPen,
  Receipt,
  Send,
  User,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

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
  name: "shadcn",
  email: "m@example.com",
  avatar: "",
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
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
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
              <DropdownMenuItem>
                <BadgeCheck />
                Konto
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User />
                Profil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Receipt />
                Utlegg
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifikasjoner
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
    url: "#",
    icon: <NotebookPen />,
    isActive: false,
    links: [
      {
        title: "Nye Søkere",
        url: "/dashboard/intervjufordeling",
      },
      {
        title: "Tidligere Assistenter",
        url: "#",
      },
    ],
  },
  {
    title: "Assistenter",
    url: "#",
    icon: <ChartLine />,
    isActive: false,
    links: [
      {
        title: "Assistenter",
        url: "#",
      },
      {
        title: "Vikarer",
        url: "#",
      },
      {
        title: "Skoler",
        url: "#",
      },
    ],
  },
  {
    title: "Brukere",
    url: "#",
    icon: <Info />,
    isActive: false,
    links: [
      {
        title: "Generer Epostliste",
        url: "#",
      },
      {
        title: "Alle Brukere",
        url: "#",
      },
    ],
  },
];
const adminLinks = [
  {
    title: "Team",
    url: "#",
    icon: <NotebookPen />,
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
    icon: <ChartLine />,
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
    icon: <Info />,
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
  return (
    <SidebarMenu>
      {links.map((link) => {
        if (!link.links) {
          return (
            <SidebarMenuItem key={link.title}>
              <SidebarMenuButton asChild>
                <Link to={link.url}>
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        }
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
                  {link.icon}
                  <span>{link.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {link.links?.map((subLink) => (
                    <SidebarMenuSubItem key={subLink.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subLink.url}>
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
    if (index !== paths.length - 1) {
      return (
        <div key={fullPath}>
          <BreadcrumbItem key={fullPath} className="hidden md:block">
            <Link to={fullPath}>{path}</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
        </div>
      );
    }
    return (
      <BreadcrumbItem key={fullPath} className="hidden md:block">
        <Link to={fullPath}>{path}</Link>
      </BreadcrumbItem>
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
                      { title: "Support", url: "#", icon: <LifeBuoy /> },
                      { title: "Feedback", url: "#", icon: <Send /> },
                    ].map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton
                          asChild
                          size="sm"
                          tooltip={link.title}
                        >
                          <Link to="#">
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
