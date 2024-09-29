"use client"

import { searchForBusiness } from "../actions";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, regions } from "../constants";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/ui/submit-button";
import { useState } from "react";
import { useNewSiteContext } from "../new-site-context";

export default function SearchForBusiness() {
  const { nextStep, setBusinessSearchResults } = useNewSiteContext();

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const data = await searchForBusiness(formData);
    setBusinessSearchResults(data);
    nextStep();
  };

  return (
    <>
      <h1 className="mb-4">Search for a business</h1>
      <p className="text-gray-600 mb-6">
        Search for a business name to find its Google Business Profile.
      </p>

      <form action={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What is the business name?
            </label>
            <Input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What country is the business located in?
            </label>
            <div className="relative">
              <Select
                name="country"
                onValueChange={(value) => setSelectedCountry(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {selectedCountry && (
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {selectedCountry === "United States"
                  ? "What state is the business located in?"
                  : "What province is the business located in?"}
              </label>
              <div className="relative">
                <Select name="region">
                  <SelectTrigger>
                    <SelectValue
                      placeholder={`Select a
              ${selectedCountry === "United States" ? "State" : "Province"}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.get(selectedCountry)?.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <SubmitButton className="w-full" text="Find Business" />
          <Button variant={"secondary"} type="button" className="w-full" disabled>
            Back
          </Button>
        </div>
      </form>
    </>
  );
}
