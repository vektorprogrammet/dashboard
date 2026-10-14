import { BarChartActive } from "@/components/bar-chart-active";
import { BarChartHorizontal } from "@/components/bar-chart-horizontal";
import { StatisticsCard } from "@/components/statistics-card";
import { StatisticsChartCard } from "@/components/statistics-chart-card";
import {
  getAdmissionData,
  getApplicantData,
  getDiscoveryData,
  getGenderStatistics,
  getStudyData,
  getStudyYearData,
} from "../mock/api/data-statistikk";

// Illustrative counts for the bar charts, until API data is available.
const exampleApplicantCount = 100;
const pieColors = ["#073564", "#63c7df", "#3e41e3", "#94a3b8"];
const barColors = [
  "#2876A8",
  "#164B7A",
  "#459FD0",
  "#073564",
  "#328BBD",
  "#60B2DE",
  "#1E6091",
  "#80C4E8",
];

const applicantData = getApplicantData()
  .map((item, index) => ({
    ...item,
  }))
  .filter((item) => item.count > 0);

const applicantCount =
  applicantData.find((item) => item.id === "applicants")?.count ||
  exampleApplicantCount;

const newApplicantsCount =
  applicantData.find((item) => item.id === "new")?.count || 0;
const returningApplicantsCount =
  applicantData.find((item) => item.id === "returning")?.count || 0;

const genderData = getGenderStatistics()
  .map((item, index) => ({
    ...item,
    color: pieColors[index % pieColors.length],
  }))
  .filter((item) => item.count > 0);

const studyData = getStudyData()
  .map((item, index) => ({
    ...item,
    color: barColors[index % barColors.length],
  }))
  .filter((item) => item.count > 0);

// Multiple responses are allowed; counts need not add up to the applicant total.
const discoveryData = getDiscoveryData()
  .map((item, index) => ({
    ...item,
    color: barColors[index % barColors.length],
  }))
  .filter((item) => item.count > 0);

const yearsData = getStudyYearData()
  .map((item, index) => ({
    ...item,
    color: pieColors[index % pieColors.length],
  }))
  .filter((item) => item.count > 0);

const admissionData = getAdmissionData()
  .map((item, index) => ({
    ...item,
    color: pieColors[index % pieColors.length],
  }))
  .filter((item) => item.count > 0);

const admissionGenderData = getGenderStatistics()
  .map((item, index) => ({
    ...item,
    color: pieColors[index % pieColors.length],
  }))
  .filter((item) => item.count > 0);

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Statistikk() {
  return (
    <main className="space-y-6 px-4">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">Søkerstatistikk</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Viser eksempeldata frem til API-et er koblet til.
        </p>
      </div>
      <section
        className="grid grid-cols-2 gap-4 lg:grid-cols-3"
        aria-label="Statistikk kort"
      >
        {StatisticsCard("Søkere", applicantCount.toString())}
        {StatisticsCard(
          "Nye søkere",
          newApplicantsCount.toString() +
            " (" +
            ((newApplicantsCount / applicantCount) * 100).toFixed(1) +
            " %)",
        )}
        {StatisticsCard(
          "Tidligere søkere",
          returningApplicantsCount.toString() +
            " (" +
            ((returningApplicantsCount / applicantCount) * 100).toFixed(1) +
            " %)",
        )}
      </section>
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        aria-label="Søkerstatistikk"
      >
        <StatisticsChartCard
          title="Kjønnsfordeling"
          description="Fordeling blant søkerne i opptaket"
          totalLabel="søkere"
          emptyMessage="Ingen søkerdata tilgjengelig."
          data={genderData}
        />
        <StatisticsChartCard
          title="Studieår"
          description="Fordeling av søkere per studieår"
          data={yearsData}
          totalLabel="søkere"
          emptyMessage="Ingen søkerdata tilgjengelig."
        />
      </section>
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        aria-label="Søkerstatistikk"
      >
        <div className="h-1/2">
          <BarChartHorizontal
            title="Hvordan hørte de om oss?"
            description="Andel søkere · Flere svar mulig"
            data={discoveryData}
            percentageBase={discoveryData.length}
            className="min-w-0"
          />
        </div>
        <BarChartActive
          title="Studieretning"
          description="Fordeling av søkere per studieretning"
          data={studyData}
          percentageBase={studyData.length}
          className="min-w-0 lg:col-span-2"
          order="desc"
        />
      </section>
      <section aria-label="Opptaksstatistikk" className="space-y-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Opptaksstatistikk
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="grid grid-rows-2 gap-4 lg:grid-cols-1">
            {StatisticsCard("Antall assistenter", "64")}
            {StatisticsCard("Antall stillinger", "78")}
          </div>
          <StatisticsChartCard
            title="Opptak"
            description="statistikk for opptak av assistenter"
            data={admissionData}
            totalLabel="søkere"
            emptyMessage="Ingen opptaksdata tilgjengelig."
          />
          <StatisticsChartCard
            title="Kjønnsfordeling"
            description="Fordeling blant de som ble tatt opp"
            totalLabel="søkere"
            emptyMessage="Ingen opptaksdata tilgjengelig."
            data={admissionGenderData}
          />
        </div>
      </section>
    </main>
  );
}
