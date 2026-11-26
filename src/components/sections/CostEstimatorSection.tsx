"use client";

import { ArrowUpRight, Calculator, Check } from "lucide-react";
import { useMemo, useState } from "react";
import {
  calculateEstimate,
  floorOptions,
  plotCoverageRatio,
  plotUnits,
  siteWorkAddOns,
  specificationTiers,
  type FloorOption,
  type PlotUnit,
  type SpecificationTier,
} from "@/data/estimator";
import { company } from "@/data/company";

const MIN_PLOT_SIZE_SQUARE_YARDS = 100;
const MAX_PLOT_SIZE_SQUARE_YARDS = 500;
const DEFAULT_PLOT_SIZE_SQUARE_FEET = 1800;

function formatCompactCurrency(amount: number) {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)}Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  if (amount >= 1000) {
    return `₹${Math.round(amount / 1000)}K`;
  }
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export default function CostEstimatorSection() {
  const [plotUnit, setPlotUnit] = useState<PlotUnit>("sqYards");
  const [plotAreaSquareFeet, setPlotAreaSquareFeet] = useState(
    DEFAULT_PLOT_SIZE_SQUARE_FEET,
  );
  const [floorOption, setFloorOption] = useState<FloorOption>("G+1");
  const [tierId, setTierId] = useState<SpecificationTier>("essential");
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const unit = plotUnits[plotUnit === "sqYards" ? 0 : 1];

  const plotSize = Math.round(plotAreaSquareFeet / unit.squareFeetPerUnit);
  const minPlotSize =
    MIN_PLOT_SIZE_SQUARE_YARDS *
    (plotUnit === "sqYards" ? 1 : 9);
  const maxPlotSize =
    MAX_PLOT_SIZE_SQUARE_YARDS *
    (plotUnit === "sqYards" ? 1 : 9);
  const sliderStep = plotUnit === "sqYards" ? 10 : 90;

  const estimate = useMemo(
    () =>
      calculateEstimate(
        plotAreaSquareFeet,
        floorOption,
        tierId,
        selectedAddOnIds,
      ),
    [plotAreaSquareFeet, floorOption, tierId, selectedAddOnIds],
  );

  const selectedTier = specificationTiers.find(
    (tier) => tier.id === tierId,
  );
  if (!selectedTier) {
    throw new Error("The selected construction package is not supported.");
  }

  const addOnSummary = siteWorkAddOns
    .filter((addOn) => selectedAddOnIds.includes(addOn.id))
    .map((addOn) => addOn.name);
  const message = [
    `Hello P. Srinivasula Reddy, I used the SVL Constructions cost estimator and would like an exact BOQ.`,
    `Plot: ${plotSize.toLocaleString("en-IN")} ${unit.label} (${plotAreaSquareFeet.toLocaleString("en-IN")} sq. ft.)`,
    `Floors: ${floorOption}`,
    `Specification: ${selectedTier.name} (₹${selectedTier.rateMin.toLocaleString("en-IN")}–₹${selectedTier.rateMax.toLocaleString("en-IN")} per sq. ft.)`,
    `Estimated built-up area: ${Math.round(estimate.builtUpArea).toLocaleString("en-IN")} sq. ft.`,
    `Site-work add-ons: ${addOnSummary.length ? addOnSummary.join(", ") : "None selected"}`,
    `Indicative estimated budget: ${formatCompactCurrency(estimate.costMin)} – ${formatCompactCurrency(estimate.costMax)}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/${company.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

  function updatePlotSize(value: string) {
    const parsedValue = Number(value);
    if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
      return;
    }

    const boundedValue = Math.min(maxPlotSize, Math.max(minPlotSize, parsedValue));
    setPlotAreaSquareFeet(boundedValue * unit.squareFeetPerUnit);
  }

  function toggleAddOn(addOnId: string) {
    setSelectedAddOnIds((currentIds) =>
      currentIds.includes(addOnId)
        ? currentIds.filter((id) => id !== addOnId)
        : [...currentIds, addOnId],
    );
  }

  return (
    <section
      id="calculator"
      aria-labelledby="estimator-heading"
      className="border-t border-surface-border bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm">
            INDICATIVE MARKET ESTIMATES
          </p>
          <h2
            id="estimator-heading"
            className="font-display text-2xl font-semibold leading-tight tracking-tight text-copy-primary sm:text-3xl lg:text-4xl"
          >
            Plan your construction budget with greater clarity.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-copy-secondary sm:text-base sm:leading-7">
            Explore an indicative Hyderabad and Telangana residential
            construction range based on your plot, floors, and finish level.
          </p>
        </div>

        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-12">
          <div className="min-w-0 space-y-8 lg:col-span-7">
            <div className="rounded-2xl border border-surface-border bg-base p-5 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <label
                    htmlFor="plot-size"
                    className="block text-sm font-semibold text-copy-primary"
                  >
                    Plot size
                  </label>
                  <p className="mt-1 text-xs leading-5 text-copy-muted">
                    1 sq. yd. = 9 sq. ft.
                  </p>
                </div>
                <div
                  className="inline-flex w-full rounded-lg border border-surface-border bg-surface p-1 sm:w-auto"
                  role="group"
                  aria-label="Plot size unit"
                >
                  {plotUnits.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={plotUnit === option.id}
                      onClick={() => setPlotUnit(option.id)}
                      className={`min-h-10 flex-1 rounded-md px-4 text-sm font-semibold transition-colors sm:flex-initial ${
                        plotUnit === option.id
                          ? "bg-brand text-bg-base"
                          : "text-copy-secondary hover:bg-elevated"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-[minmax(0,1fr)_112px] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_144px] sm:gap-5">
                <input
                  aria-label={`Plot size in ${unit.label}`}
                  type="range"
                  min={minPlotSize}
                  max={maxPlotSize}
                  step={sliderStep}
                  value={plotSize}
                  onChange={(event) => updatePlotSize(event.target.value)}
                  className="h-2 w-full cursor-pointer accent-brand"
                />
                <div className="relative">
                  <input
                    id="plot-size"
                    type="number"
                    min={minPlotSize}
                    max={maxPlotSize}
                    step="1"
                    value={plotSize}
                    onChange={(event) => updatePlotSize(event.target.value)}
                    className="min-h-12 w-full rounded-lg border border-surface-border bg-base px-3 pr-12 text-right text-base font-semibold tabular-nums text-copy-primary outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-copy-muted">
                    {plotUnit === "sqYards" ? "yd²" : "ft²"}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-copy-muted">
                <span>{minPlotSize.toLocaleString("en-IN")}</span>
                <span>{maxPlotSize.toLocaleString("en-IN")}</span>
              </div>
              <p className="mt-4 rounded-lg bg-brand-dim px-3 py-2.5 text-xs leading-5 text-copy-secondary">
                Built-up area assumes about {Math.round(plotCoverageRatio * 100)}%
                ground coverage on each floor. Actual setbacks and plans may
                change this.
              </p>
            </div>

            <fieldset className="min-w-0">
              <legend className="text-sm font-semibold text-copy-primary">
                Number of floors
              </legend>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:max-w-md sm:gap-3">
                {floorOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={floorOption === option.id}
                    onClick={() => setFloorOption(option.id)}
                    className={`min-h-12 rounded-lg border px-2 text-sm font-semibold transition-colors ${
                      floorOption === option.id
                        ? "border-brand bg-brand-dim text-brand"
                        : "border-surface-border bg-base text-copy-secondary hover:border-brand"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="min-w-0">
              <legend className="text-sm font-semibold text-copy-primary">
                Construction package
              </legend>
              <p className="mt-1 text-xs leading-5 text-copy-muted">
                Indicative market estimates; rates are per built-up sq. ft.
              </p>
              <div className="mt-4 grid min-w-0 gap-3 md:grid-cols-3">
                {specificationTiers.map((tier) => {
                  const isSelected = tierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setTierId(tier.id)}
                      className={`min-w-0 rounded-xl border p-4 text-left transition-colors ${
                        isSelected
                          ? "border-brand bg-brand-dim"
                          : "border-surface-border bg-base hover:border-brand"
                      }`}
                    >
                      <span className="flex min-h-12 items-start justify-between gap-2">
                        <span className="text-sm font-semibold leading-5 text-copy-primary">
                          {tier.name}
                        </span>
                        {isSelected && (
                          <Check
                            aria-hidden="true"
                            className="size-4 shrink-0 text-brand"
                          />
                        )}
                      </span>
                      <span className="mt-2 block text-sm font-semibold tabular-nums text-brand">
                        ₹{tier.rateMin.toLocaleString("en-IN")}–₹
                        {tier.rateMax.toLocaleString("en-IN")}
                        <span className="block text-xs font-normal text-copy-muted">
                          per sq. ft.
                        </span>
                      </span>
                      <ul className="mt-4 space-y-2 border-t border-surface-border pt-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-xs leading-5 text-copy-secondary"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="min-w-0">
              <legend className="text-sm font-semibold text-copy-primary">
                Optional site-work allowances
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {siteWorkAddOns.map((addOn) => {
                  const isSelected = selectedAddOnIds.includes(addOn.id);
                  return (
                    <label
                      key={addOn.id}
                      className={`flex min-w-0 cursor-pointer items-start gap-3 rounded-xl border bg-base p-4 transition-colors ${
                        isSelected
                          ? "border-brand bg-brand-dim"
                          : "border-surface-border hover:border-brand"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleAddOn(addOn.id)}
                        className="mt-0.5 size-4 shrink-0 accent-brand"
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-copy-primary">
                          {addOn.name}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-copy-secondary">
                          {formatCompactCurrency(addOn.costMin)}–
                          {formatCompactCurrency(addOn.costMax)} allowance
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-copy-muted">
                          {addOn.allowance}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <aside
            aria-label="Live construction cost estimate"
            aria-live="polite"
            className="min-w-0 rounded-2xl border border-surface-border bg-base p-6 sm:p-8 lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dim text-brand">
                <Calculator aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copy-muted">
                  Live estimate
                </p>
                <p className="mt-1 text-sm font-medium text-copy-primary">
                  {floorOption} · {selectedTier.name}
                </p>
              </div>
            </div>

            <div className="mt-7 border-b border-surface-border pb-6">
              <p className="text-sm text-copy-secondary">
                Estimated built-up area
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-copy-primary">
                {Math.round(estimate.builtUpArea).toLocaleString("en-IN")}
                <span className="ml-1 text-sm font-medium text-copy-muted">
                  sq. ft.
                </span>
              </p>
            </div>

            <div className="py-6">
              <p className="text-sm font-medium text-copy-secondary">
                Indicative total cost range
              </p>
              <p className="mt-2 break-words font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                {formatCompactCurrency(estimate.costMin)} –{" "}
                {formatCompactCurrency(estimate.costMax)}
              </p>
              <p className="mt-2 text-xs leading-5 text-copy-muted">
                Includes selected site-work allowances, if any.
              </p>
            </div>

            <div className="border-t border-surface-border pt-5">
              <h3 className="text-sm font-semibold text-copy-primary">
                Stage-wise cost breakdown
              </h3>
              <ul className="mt-4 space-y-4">
                {estimate.stageCosts.map((stage) => (
                  <li key={stage.id}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="min-w-0 text-xs leading-5 text-copy-secondary">
                        {stage.name}
                      </span>
                      <span className="shrink-0 text-right text-xs font-medium tabular-nums text-copy-primary">
                        {formatCompactCurrency(stage.costMin)}–
                        {formatCompactCurrency(stage.costMax)}
                      </span>
                    </div>
                    <div
                      className="mt-2 h-1.5 overflow-hidden rounded-full bg-elevated"
                      role="img"
                      aria-label={`${stage.share}% of indicative total`}
                    >
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${stage.share}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 rounded-lg bg-surface p-3 text-xs leading-5 text-copy-muted">
              Indicative ballpark based on prevailing Hyderabad & Telangana
              market rates. Final BOQ depends on soil test, structural
              drawings, and exact material selection.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-bg-base transition-colors hover:bg-brand/90"
            >
              Get Exact BOQ on WhatsApp
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
