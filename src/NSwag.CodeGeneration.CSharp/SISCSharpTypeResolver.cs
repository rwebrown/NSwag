using NJsonSchema;
using NJsonSchema.CodeGeneration.CSharp;

namespace NSwag.CodeGeneration.CSharp;

public class SISCSharpTypeResolver : CSharpTypeResolver
{
    public SISCSharpTypeResolver(CSharpGeneratorSettings settings) : base(settings)
    {
    }

    public SISCSharpTypeResolver(CSharpGeneratorSettings settings, JsonSchema exceptionSchema) : base(settings, exceptionSchema)
    {
    }

    public override string Resolve(JsonSchema schema, bool isNullable, string typeNameHint)
    {
        if (schema.ActualSchema.ExtensionData?.TryGetValue("x-csharp-shared-type", out var typeName) == true)
        {
            return typeName.ToString();
        }

        if (schema.ActualSchema.ExtensionData?.TryGetValue("x-namespace", out var featureNamespace) == true
            && schema.ActualSchema.ExtensionData?.TryGetValue("x-type", out var featureType) == true)
        {
            return $"{featureNamespace}.{featureType}";
        }

        return base.Resolve(schema, isNullable, typeNameHint);
    }
}