class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){
    }

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'medium'));
tasks.push(new Task('Buy chocolate', 'low'));
tasks.push(new Task('do laundry', 'high'));
tasks.push(new Task('get a job', 'high'));
tasks.push(new Task('find marko', 'low'));

tasks[0].markDone()

for(var task of tasks) {
  console.log(task);
  }
