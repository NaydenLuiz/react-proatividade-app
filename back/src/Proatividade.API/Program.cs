using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Proatividade.API.Data;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers()
.AddJsonOptions(options => options.JsonSerializerOptions.Converters.Add(
    new JsonStringEnumConverter()
));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Add CORS services to the container
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Replace with your client URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProatividadeContext")
));



var app = builder.Build();

// Use CORS policy
app.UseCors("AllowSpecificOrigin");

app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();
app.Run();
