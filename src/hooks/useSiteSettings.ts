import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key_name, value");

      if (error) throw error;

      // Convert array to object for easier access
      const settings: Record<string, string> = {};
      data?.forEach((item) => {
        settings[item.key_name] = item.value;
      });

      return settings;
    },
  });
}

export function useSiteSetting(key: string) {
  const { data: settings, ...rest } = useSiteSettings();
  return {
    data: settings?.[key],
    ...rest,
  };
}
