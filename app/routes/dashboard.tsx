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
  Database,
  Folder,
  Forward,
  Frame,
  Info,
  LifeBuoy,
  LogOut,
  MapIcon,
  MapPinned,
  MoreHorizontal,
  NotebookPen,
  PieChart,
  Receipt,
  Send,
  Settings,
  Trash2,
  User,
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
  SidebarMenuAction,
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
              <Link to={href("/dashboard/profile")} prefetch="intent">
                <DropdownMenuItem>
                  <User />
                  Profil
                </DropdownMenuItem>
              </Link>
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
    isActive: true,
    links: [
      {
        title: "Intervjufordeling",
        url: "/dashboard/intervjufordeling",
      },
      {
        title: "Intervjuskjema",
        url: "#",
      },
    ],
  },
  {
    title: "Statistikk",
    url: "#",
    icon: <ChartLine />,
    links: [
      {
        title: "Opptak",
        url: "#",
      },
      {
        title: "Utlegg",
        url: "/dashboard/utlegg",
      },
    ],
  },
  {
    title: "Informasjon",
    url: "#",
    icon: <Info />,
    links: [
      {
        title: "Artikler",
        url: "#",
      },
      {
        title: "Changelog",
        url: "#",
      },
      {
        title: "Stand",
        url: "#",
      },
    ],
  },
  {
    title: "Data",
    url: "#",
    icon: <Database />,
    links: [
      {
        title: "Arrangementer",
        url: "#",
      },
      {
        title: "Attester",
        url: "#",
      },
      {
        title: "Assistenter",
        url: "#",
      },
      {
        title: "Avdelinger",
        url: "#",
      },
      {
        title: "Brukere",
        url: "#",
      },
      {
        title: "Brukergruppesamlinger",
        url: "#",
      },
      {
        title: "Hovedstyret",
        url: "#",
      },
      {
        title: "Opptak",
        url: "#",
      },
      {
        title: "Opptaksperioder",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Teaminteresse",
        url: "#",
      },
      {
        title: "Sponsorer",
        url: "#",
      },
      {
        title: "Skoler",
        url: "#",
      },
      {
        title: "Linjer",
        url: "#",
      },
      {
        title: "Undersøkelser",
        url: "#",
      },
      {
        title: "Vikarer",
        url: "#",
      },
    ],
  },
  {
    title: "Annet",
    url: "#",
    icon: <Settings />,
    links: [
      {
        title: "Access Control",
        url: "#",
      },
      {
        title: "Kontrollpanel",
        url: "#",
      },
      {
        title: "Timeplan",
        url: "#",
      },
      {
        title: "Epostlister",
        url: "#",
      },
      {
        title: "Slab",
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
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((link) => {
          if (!link.links) {
            return (
              <SidebarMenuItem key={link.title}>
                <SidebarMenuButton asChild>
                  <Link to={link.url} prefetch="intent">
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
    </SidebarGroup>
  );
}
const projectsData = [
  {
    name: "Design Engineering",
    url: "#",
    icon: <Frame />,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: <PieChart />,
  },
  {
    name: "Travel",
    url: "#",
    icon: <MapIcon />,
  },
];
function NavItems({
  items,
}: {
  items: Array<{
    name: string;
    url: string;
    icon: ReactNode;
  }>;
}) {
  const isMobile = useSidebar();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link to={item.url} prefetch="intent">
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
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
              "hover:text-black"
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
              <NavLinks links={mainLinks} />
              <NavItems items={projectsData} />
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
