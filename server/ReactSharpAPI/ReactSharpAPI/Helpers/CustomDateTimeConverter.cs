using System.Text.Json;
using System.Text.Json.Serialization;

namespace ReactSharpAPI.Helpers
{
    public class CustomDateTimeConverter : JsonConverter<DateTime>
    {
        private readonly string _format;

        public CustomDateTimeConverter(string format)
        {
            _format = format;
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(_format));
        }

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateTime.ParseExact(reader.GetString(), _format, null);
        }
    }
}
