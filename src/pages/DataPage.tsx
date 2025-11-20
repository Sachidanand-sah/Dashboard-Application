import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { DataTable } from "../components/DataTable";

const Data = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Data Management</h1>
        <p className="text-muted-foreground">
          View, search, and manage your user data
        </p>
      </div>

      {/* Data Table Section */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>User Data</CardTitle>
          <CardDescription>
            Browse and search through user information with advanced pagination
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Data;