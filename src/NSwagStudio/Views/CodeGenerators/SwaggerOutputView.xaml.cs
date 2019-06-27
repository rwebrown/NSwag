﻿using NSwag.Commands;
using NSwagStudio.ViewModels.CodeGenerators;

namespace NSwagStudio.Views.CodeGenerators
{
    public partial class SwaggerOutputView : CodeGeneratorViewBase
    {
        public SwaggerOutputView()
        {
            InitializeComponent();
        }

        public override string Title => "OpenAPI/Swagger Specification";

        private SwaggerOutputViewModel Model => (SwaggerOutputViewModel)Resources["ViewModel"];

        public override void UpdateOutput(OpenApiDocumentExecutionResult result)
        {
            Model.SwaggerCode = result.SwaggerOutput;
        }

        public override bool IsSelected
        {
            get { return true; }
            set { }
        }

        public override bool IsPersistent => true;
    }
}
