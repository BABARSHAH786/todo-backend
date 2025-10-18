// new
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import Card from "../components/Card";

export default function DashboardPage() {
  const navigate = useNavigate();

  const navigateFunc = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="w-full max-w-4xl mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🏥 Patient Dashboard
        </h1>
        <p className="text-gray-600">
          Manage reports, track vitals, and monitor patient progress.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {/* Upload Report */}
        {/* <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">📤 Upload Report</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add and store patient medical reports securely.
            </p>
          </div>
          <Button onClick={() => navigateFunc("upload")} variant="primary" className="w-full">
            Go to Upload
          </Button>
        </Card>
        */}

        {/* Add Vitals */}
        {/* <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">📊 Add Vitals</h3>
            <p className="text-sm text-gray-600 mb-4">
              Record vital signs like heart rate, BP, and temperature.
            </p>
          </div>
          <Button onClick={() => navigateFunc("vitals")} variant="primary" className="w-full">
            Go to Vitals
          </Button>
        </Card> */}

        {/* View Timeline */}
        {/* <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">📈 View Timeline</h3>
            <p className="text-sm text-gray-600 mb-4">
              See all patient history and medical progress over time.
            </p>
          </div>
          <Button onClick={() => navigateFunc("timeline")} variant="primary" className="w-full">
            Go to Timeline
          </Button>
        </Card>  */}
      </div>
    </div>
  );
}

