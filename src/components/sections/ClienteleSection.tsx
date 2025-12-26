import { Building2 } from "lucide-react";
import { MOCK_CLIENTS } from "@/mock/clients";

export default function ClienteleSection() {
  return (
    <section className="section-padding bg-gray-100 border-t border-border/50">
      <div className="container-wide">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to partner with respected organizations across Tamil Nadu.
          </p>
        </div>

        {/* 🟢 UPDATED GRID: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_CLIENTS.map((client, index) => (
            <div 
              key={client.id} 
              className="opacity-0 animate-slide-up group relative flex flex-col items-center justify-center p-10 rounded-2xl border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center w-full">
                
                {client.logo ? (
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Building2 className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                )}

                <span className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors">
                  {client.name}
                </span>
                
                <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-medium">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}