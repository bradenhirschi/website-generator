import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNewSiteContext } from "../new-site-context";

export default function SelectBusiness() {
  const {
    nextStep,
    businessSearchResults,
    selectedBusiness,
    setSelectedBusiness,
  } = useNewSiteContext();

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <>
      <h1 className="mb-4">See the business?</h1>
      <p className=" text-gray-600 mb-6">
        Select the correct business from the list below. If you don't see it,
        try searching again.
      </p>

      {businessSearchResults.map((business: any) => (
        <Card className="mb-6" key={business.place_results.place_id}>
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h4>{business.place_results.title}</h4>
              <p className="text-gray-500">{business.place_results.data_id}</p>
            </div>
            {selectedBusiness === business ? (
              <Button onClick={() => setSelectedBusiness()}>Selected</Button>
            ) : (
              <Button
                variant={"secondary"}
                onClick={() => setSelectedBusiness(business)}
              >
                Select
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="space-y-4">
        <Button onClick={handleSubmit} className="w-full">
          Import my company
        </Button>
        <Button variant="secondary" className="w-full" disabled>
          I don't see my company
        </Button>
      </div>
    </>
  );
}
