let first= +process.argv[2];
let last= +process.argv[3];
let sum=0;
if (first>last)
	console.log("First Number must be smaller");
else{
	for(let i=first;i<=last;i++)
		sum=sum+i;
	console.log("Sum =",sum);
}